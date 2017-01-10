package www.xiyou.com.logger;

import org.junit.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;


/**
 * Created by chad.ding on 2017/1/10.
 */

public class LoggerTest {

    private final Logger logger = LoggerFactory.getLogger(LoggerTest.class);

    @Test
    public void test(){
        logger.info("AAAAAAAAA");
    }
}
