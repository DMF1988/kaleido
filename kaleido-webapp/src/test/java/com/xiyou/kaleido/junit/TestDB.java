package com.xiyou.kaleido.junit;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.user.entity.User;
import com.xiyou.kaleido.user.service.UserService;
import org.junit.Before;
import org.junit.Test;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Created by chad.ding on 2017/3/23.
 */
public class TestDB {
    private ApplicationContext ctx;

    @Before
    public void setup(){
        ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
    }

    @Test
    public void test(){
        UserService userService = (UserService)ctx.getBean("userService");
        try {
            User user = userService.getUserInfo("201701160000001");
            System.out.println(user.getLoginName());
        } catch (KaleidoException e) {
            e.printStackTrace();
        }
    }

}
