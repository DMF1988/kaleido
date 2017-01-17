package com.xiyou.kaleido.user.dao;

import com.xiyou.kaleido.user.entity.User;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by chad.ding on 2017/1/6.
 */
@Repository(value="userDao")
public interface UserDao {
    User getUserInfo(String userId);
    User login(@Param("loginName") String loginName, @Param("loginPassword") String loginPassword);
    long addUser(@Param("user") User user);
    String getLatestId();
    int checkUserExist(String loginName);
    long updateLoginTime(@Param("userId") String userId);
}
