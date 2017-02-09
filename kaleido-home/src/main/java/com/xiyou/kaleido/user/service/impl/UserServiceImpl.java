package com.xiyou.kaleido.user.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.profile.dao.ProfileDao;
import com.xiyou.kaleido.profile.entity.Profile;
import com.xiyou.kaleido.user.dao.UserDao;
import com.xiyou.kaleido.user.entity.User;
import com.xiyou.kaleido.user.exception.UserError;
import com.xiyou.kaleido.user.service.UserService;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Service(value="userService")
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private ProfileDao profileDao;

    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    public void updateEmail(User user) throws KaleidoException {

        int isEmailExist = userDao.checkUserExist(user.getLoginName());

        if(isEmailExist > 0){
            throw new KaleidoException(UserError.USER_EXISTS, user.getLoginName());
        }

        userDao.updateEmail(user);

        logger.info("user login account update to %s", user.getLoginName());

    }

    public void updatePassword(User user) {

        userDao.updatePassword(user);

        logger.info("update user %s login password", user.getLoginName());

    }

    @Transactional
    public User getUserInfo(String userId) throws KaleidoException {

        User user = userDao.getUserInfo(userId);

        if(user == null){
            throw new KaleidoException(UserError.USER_NOT_EXIST, String.valueOf(userId));
        }
        userDao.updateLoginTime(user.getUserId());

        return user;
    }

    @Transactional
    public User login( String loginName, String loginPassword) throws KaleidoException {

        User user = userDao.login(loginName, loginPassword);

        if(user == null){
            throw new KaleidoException(UserError.LOGIN_FAILED, String.valueOf(loginName));
        }

        logger.info("user %s logged in", loginName);

        return user;
    }

    @Transactional
    public String addUser(String loginName, String loginPassword) throws KaleidoException {

        int num = userDao.checkUserExist(loginName);
        if(num > 0){
            throw new KaleidoException(UserError.USER_EXISTS, loginName);
        }

        String userId = this.generateUserId();

        User user = new User();
        user.setLoginName(loginName);
        user.setLoginPassword(loginPassword);
        user.setUserId(userId);
        user.setCreateTime(new Date());
        user.setLastUpdateTime(new Date());
        user.setDeleted(0);

        userDao.addUser(user);

        Profile profile = new Profile();
        profile.setUserId(userId);
        profile.setLastUpdateTime(new Date());
        profile.setCreateTime(new Date());
        profile.setDeleted(0);
        profileDao.addProfile(profile);


        return userId;
    }

    private String generateUserId() throws KaleidoException {

        long userId = 0L;

        SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");
        String today = format.format(new Date());

        String latestId = userDao.getLatestId();
        String latestDay = "";
        if(latestId != null){
            latestDay = latestId.substring(0, 8);
        }

        if(today.equals(latestDay)){
            userId = Long.valueOf(latestId)+1;
        }else if(latestDay == "" || (Integer.valueOf(today) != Integer.valueOf(latestDay))){
            StringBuilder sb = new StringBuilder();
            sb.append(today).append("0000001");
            userId = Long.valueOf(sb.toString());
        }else{
            throw new KaleidoException("时间错误");
        }

        return String.valueOf(userId);
    }

}
