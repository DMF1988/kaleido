package www.xiyou.com.profile.service;

import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.profile.entity.Profile;

/**
 * Created by DMF on 2017/1/13.
 */
public interface ProfileService {
    public Profile getProfile(String userId) throws KaleidoException;
}
