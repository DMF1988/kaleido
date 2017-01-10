package www.xiyou.com.user.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.user.dao.UserDao;
import www.xiyou.com.user.entity.User;
import www.xiyou.com.user.exception.UserError;
import www.xiyou.com.user.service.UserService;

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
}
