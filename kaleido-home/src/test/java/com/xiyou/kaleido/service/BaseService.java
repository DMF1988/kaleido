package com.xiyou.kaleido.service;

import org.junit.runner.RunWith;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.AbstractTransactionalJUnit4SpringContextTests;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by chad.ding on 2017/6/20.
 */

@ContextConfiguration(locations = {"classpath*:applicationContext.xml"})
@ActiveProfiles("test")
public abstract class BaseService extends AbstractTransactionalJUnit4SpringContextTests {
}
