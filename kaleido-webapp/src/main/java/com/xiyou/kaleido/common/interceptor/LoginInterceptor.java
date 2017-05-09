package com.xiyou.kaleido.common.interceptor;

import com.xiyou.kaleido.common.KaleidoError;
import com.xiyou.kaleido.common.exception.KaleidoException;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.UUID;

/**
 * Created by chad.ding on 2017/2/13.
 */
public class LoginInterceptor extends HandlerInterceptorAdapter {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {

        HttpSession session = request.getSession();
        UUID TOKEN = (UUID)session.getAttribute("TOKEN");

        Cookie[] cookies = request.getCookies();
        if(TOKEN != null){
            for(Cookie cookie : cookies){
                if("TOKEN".equals(cookie.getName()) && cookie.getValue().equals(TOKEN.toString())){
                    return true;
                }
            }
        }

       /* response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=UTF-8");
        ResponseModel model = new ResponseModel(KaleidoError.SESSION_TIMEOUT.getCode(), KaleidoError.SESSION_TIMEOUT.getMsg());
        response.getWriter().write(JSONObject.toJSONString(model));
        return false;*/

        throw new KaleidoException(KaleidoError.SESSION_TIMEOUT);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {

        System.out.println("hello");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {

    }
}
