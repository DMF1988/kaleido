package com.xiyou.kaleido.user.service;

import com.xiyou.kaleido.user.entity.User;
import com.xiyou.kaleido.common.exception.KaleidoException;

/**
 * Created by chad.ding on 2017/1/6.
 */
public interface UserService {
    User getUserInfo(String userId) throws KaleidoException;
    User login(String loginName, String loginPassword) throws KaleidoException;
    String addUser(String loginName, String loginPassword) throws KaleidoException;
    void updateEmail(User user) throws KaleidoException;
    void updatePassword(User user);
}
