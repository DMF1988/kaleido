package www.xiyou.com.user.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import www.xiyou.com.user.dao.UserDao;
import www.xiyou.com.user.entity.User;
import www.xiyou.com.user.service.UserService;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Service(value="userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    public User getUserInfo(int userId) {
        User user = userDao.getUserInfo(userId);

        return user;
    }
}
