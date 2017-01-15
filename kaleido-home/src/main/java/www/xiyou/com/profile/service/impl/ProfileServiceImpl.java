package www.xiyou.com.profile.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.profile.dao.ProfileDao;
import www.xiyou.com.profile.entity.Profile;
import www.xiyou.com.profile.exception.ProfileError;
import www.xiyou.com.profile.service.ProfileService;

/**
 * Created by DMF on 2017/1/13.
 */

@Service("profileService")
public class ProfileServiceImpl implements ProfileService {

    @Autowired
    private ProfileDao profileDao;

    public Profile getProfile(String userId) throws KaleidoException {

        Profile profile = profileDao.getProfileByUserId(userId);

        if(profile == null){
            throw new KaleidoException(ProfileError.PROFILE_NOT_EXIST, userId);
        }

        return profile;
    }
}
