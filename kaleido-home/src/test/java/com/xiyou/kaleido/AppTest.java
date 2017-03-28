package com.xiyou.kaleido;

import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.user.entity.User;
import com.xiyou.kaleido.user.service.UserService;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;
import org.junit.Before;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Unit test for simple App.
 */
public class AppTest{
        private ApplicationContext ctx;

        @Before
        public void setup(){
            ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        }

        @org.junit.Test
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
