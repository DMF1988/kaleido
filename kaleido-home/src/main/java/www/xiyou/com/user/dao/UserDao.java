package www.xiyou.com.user.dao;

import org.springframework.stereotype.Repository;
import www.xiyou.com.user.entity.User;

/**
 * Created by chad.ding on 2017/1/6.
 */
@Repository(value="userDao")
public interface UserDao {
    User getUserInfo(String userId);
}
