package com.xiyou.kaleido.profile.controller;

import com.xiyou.kaleido.common.ResponseModel;
import com.xiyou.kaleido.profile.model.ProfileVo;
import com.xiyou.kaleido.profile.service.ProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.xiyou.kaleido.common.annotation.KaleidoController;
import com.xiyou.kaleido.common.util.KaleidoException;
import com.xiyou.kaleido.profile.entity.Profile;

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
