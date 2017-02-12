package com.xiyou.kaleido.profile.service.impl;

import com.xiyou.kaleido.common.Configuration;
import com.xiyou.kaleido.profile.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.profile.dao.ProfileDao;
import com.xiyou.kaleido.profile.entity.Profile;
import com.xiyou.kaleido.profile.exception.ProfileError;
import org.springframework.transaction.annotation.Transactional;

import java.io.InputStream;
import java.util.List;

/**
 * Created by DMF on 2017/1/13.
 */

@Service("profileService")
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileDao profileDao;

    @Autowired
    private Configuration configuration;

    public int countUser(String keyword){
        int result = profileDao.countUser(keyword);

        return result;
    }

    public String uploadPortrait(InputStream image, String fileName, String userId) throws KaleidoException {
        System.out.println(configuration.getPortraitDir());
        return null;
    }

    public List<Profile> queryUser(String keyword, int pageNum, int pageSize) throws KaleidoException {

        //前端页码从1开始，数据库查询页码从0开始
        PageRequest pageRequest = new PageRequest(pageNum - 1, pageSize, new Sort(Sort.Direction.DESC, "create_time"));

        List<Profile> list = profileDao.queryUser(keyword, pageRequest);

        return list;
    }

    public Profile getProfile(String userId) throws KaleidoException {

        Profile profile = profileDao.getProfileByUserId(userId);

        if(profile == null){
            throw new KaleidoException(ProfileError.PROFILE_NOT_EXIST, userId);
        }

        return profile;
    }

    @Transactional
    public void updateProfile(Profile profile) throws KaleidoException {

        if(profile == null){
            throw new KaleidoException(ProfileError.PROFILE_NOT_EXIST);
        }

        profileDao.updateByUserId(profile);
    };
}
