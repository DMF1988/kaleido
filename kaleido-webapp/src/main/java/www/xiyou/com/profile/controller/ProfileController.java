package www.xiyou.com.profile.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import www.xiyou.com.profile.model.Profile;
import www.xiyou.com.user.entity.User;
import www.xiyou.com.user.service.UserService;
import www.xiyou.com.common.ResponseModel;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Controller
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="/get", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> getUserInfo(@RequestParam("id") int id, HttpServletRequest request){

        Profile profile = new Profile();
        User user = userService.getUserInfo(id);

        profile.setUserId(user.getUserId());
        profile.setUserName(user.getUserName());
        profile.setRealName(user.getRealName());
        profile.setLoginName(user.getLoginName());
        profile.setPhoneNum(user.getPhoneNum());
        profile.setCreateTime(user.getCreateTime());

        return new ResponseEntity<ResponseModel>(new ResponseModel<Profile>(profile, 200, "success"), HttpStatus.OK);
    }
}
