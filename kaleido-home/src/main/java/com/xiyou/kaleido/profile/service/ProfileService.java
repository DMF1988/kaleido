package com.xiyou.kaleido.profile.service;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.profile.entity.Profile;
import java.io.InputStream;
import java.util.List;

/**
 * Created by DMF on 2017/1/13.
 */
public interface ProfileService {
    public Profile getProfile(String userId) throws KaleidoException;
    public void updateProfile(Profile profile) throws KaleidoException;
    public String uploadPortrait(InputStream image, String fileName, String userId) throws KaleidoException;
    public List<Profile> queryUser(String keyword, int pageNum, int pageSize) throws KaleidoException;
    public int countUser(String keyword);
}
