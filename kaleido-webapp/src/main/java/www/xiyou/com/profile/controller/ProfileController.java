package www.xiyou.com.profile.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import www.xiyou.com.common.annotation.KaleidoController;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.profile.entity.Profile;
import www.xiyou.com.profile.model.ProfileVo;
import www.xiyou.com.profile.service.ProfileService;
import www.xiyou.com.user.entity.User;
import www.xiyou.com.common.ResponseModel;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Controller
@KaleidoController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value="/get", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> getUserInfo(@RequestParam String userId) throws KaleidoException {

        ProfileVo vo = new ProfileVo();
        Profile profile = profileService.getProfile(userId);

        vo.setUserId(profile.getUserId());
        vo.setUserName(profile.getUserName());
        vo.setRealName(profile.getRealName());
        vo.setPhoneNum(profile.getPhoneNum());
        vo.setCountry(profile.getCountry());
        vo.setProvince(profile.getProvince());
        vo.setCity(profile.getCity());
        vo.setAddress(profile.getAddress());
        vo.setBirthday(profile.getBirthday());
        vo.setPortrait(profile.getPortrait());
        vo.setGender(profile.getGender());
        vo.setOccupation(profile.getOccupation());


        return new ResponseEntity<ResponseModel>(new ResponseModel<ProfileVo>(vo), HttpStatus.OK);
    }
}
