package www.xiyou.com.user.service.impl;

import org.apache.ibatis.annotations.Param;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.user.dao.UserDao;
import www.xiyou.com.user.entity.User;
import www.xiyou.com.user.exception.UserError;
import www.xiyou.com.user.service.UserService;

import java.util.Date;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Service(value="userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public User getUserInfo(String userId) throws KaleidoException {

        User user = userDao.getUserInfo(userId);

        if(user == null){
            throw new KaleidoException(UserError.USER_NOT_EXIST, String.valueOf(userId));
        }

        return user;
    }

    public User login( String loginName, String loginPassowrd) throws KaleidoException {
        User user = userDao.login(loginName, loginPassowrd);

        if(user == null){
            throw new KaleidoException(UserError.LOGIN_FAILED, String.valueOf(loginName));
        }
        return user;
    }

    public String addUser(String loginName, String loginPassword, String userName) throws KaleidoException {

        String latestId = userDao.getLatestId();
        long userId = Long.valueOf(latestId)+1;

        User user = new User();
        user.setLoginName(loginName);
        user.setLoginPassword(loginPassword);
        user.setUserId(String.valueOf(userId));
        user.setCreateTime(new Date());
        user.setLastUpdateTime(new Date());
        if(userName != null){
            user.setUserName(userName);
        }

        userDao.addUser(user);

        return String.valueOf(userId);
    }


}
