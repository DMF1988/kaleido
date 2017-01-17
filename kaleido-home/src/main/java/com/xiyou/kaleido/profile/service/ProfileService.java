package com.xiyou.kaleido.profile.service;

import com.xiyou.kaleido.common.util.KaleidoException;
import com.xiyou.kaleido.profile.entity.Profile;

/**
 * Created by DMF on 2017/1/13.
 */
public interface ProfileService {
    public Profile getProfile(String userId) throws KaleidoException;
    public long updateProfile(Profile profile) throws KaleidoException;
}