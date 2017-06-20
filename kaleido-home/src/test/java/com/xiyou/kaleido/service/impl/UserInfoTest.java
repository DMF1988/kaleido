package com.xiyou.kaleido.service.impl;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.service.BaseService;
import com.xiyou.kaleido.user.entity.User;
import com.xiyou.kaleido.user.service.UserService;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * Created by chad.ding on 2017/6/20.
 */
public class UserInfoTest extends BaseService{

    @Autowired
    UserService userService;

    @Test
    public void getUserInfo(){
        try {
            User user = userService.getUserInfo("201701160000001");
            System.out.println(user.getLoginName());
        } catch (KaleidoException e) {
            e.printStackTrace();
        }

    }
}
