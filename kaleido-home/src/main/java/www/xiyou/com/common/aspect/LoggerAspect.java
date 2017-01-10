package www.xiyou.com.common.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

/**
 * Created by chad.ding on 2017/1/10.
 */

@Component
@Aspect
public class LoggerAspect {

    private final Logger logger  = LoggerFactory.getLogger(LoggerAspect.class);

    @AfterThrowing(throwing= "ex", pointcut = "execution(* www.xiyou.com..service.*.*(..))")
    public void doLog(final Throwable ex){

       if(ex == null){
           return;
       }

       Runnable log =  new Runnable(){
            public void run(){
                logger.error(ex.getMessage());
            }
        };

        log.run();
    }
}
