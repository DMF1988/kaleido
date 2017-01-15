package www.xiyou.com.user.service;

import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.user.entity.User;

/**
 * Created by chad.ding on 2017/1/6.
 */
public interface UserService {
    User getUserInfo(String userId) throws KaleidoException;
    User login(String loginName, String loginPassword) throws KaleidoException;
    String addUser(String loginName, String loginPassword) throws KaleidoException;
}
