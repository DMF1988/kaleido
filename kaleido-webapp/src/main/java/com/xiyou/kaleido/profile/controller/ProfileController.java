package com.xiyou.kaleido.profile.controller;

import com.xiyou.kaleido.common.model.PaginationVo;
import com.xiyou.kaleido.common.model.ResponseModel;
import com.xiyou.kaleido.common.util.PaginationUtils;
import com.xiyou.kaleido.profile.model.ProfileVo;
import com.xiyou.kaleido.profile.model.UserQueryVo;
import com.xiyou.kaleido.profile.service.ProfileService;
import org.apache.commons.fileupload.FileItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.xiyou.kaleido.common.annotation.KaleidoController;
import com.xiyou.kaleido.common.exception.KaleidoException;
import com.xiyou.kaleido.profile.entity.Profile;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Controller
@KaleidoController
@RequestMapping("/api/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileService;

    @RequestMapping(value="query", method=RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<ResponseModel<PaginationVo>> queryUser(@RequestBody @Validated UserQueryVo queryVo) throws KaleidoException {

        int total = profileService.countUser(queryVo.getKeyword());

        List<ProfileVo> list = new ArrayList<ProfileVo>();
        List<Profile> profiles = profileService.queryUser(queryVo.getKeyword(), queryVo.getPageNum(), queryVo.getPageSize());

        for(Profile profile : profiles){
            ProfileVo profileVo = new ProfileVo();
            profileVo.setPortrait(profile.getPortrait());
            profileVo.setUserId(profile.getUserId());
            profileVo.setUserName(profile.getUserName());
            profileVo.setGender(profile.getGender());
            profileVo.setCountry(profile.getCountry());
            profileVo.setProvince(profile.getProvince());
            profileVo.setCity(profile.getCity());

            list.add(profileVo);
        }

        PaginationVo paginationVo = new PaginationVo();
        paginationVo.setData(list);
        paginationVo.setTotal(PaginationUtils.getTotalPage(queryVo.getPageSize(), total));
        return new ResponseEntity<ResponseModel<PaginationVo>>(new ResponseModel<PaginationVo>(paginationVo), HttpStatus.OK);
    }

    @RequestMapping(value="uploadPortrait", method=RequestMethod.POST)
    public ResponseEntity<ResponseModel> uploadPortrait(@RequestParam("image") CommonsMultipartFile image, @RequestParam("userId") String userId) throws IOException, KaleidoException {

        FileItem item = image.getFileItem();

        profileService.uploadPortrait(item.getInputStream(), item.getFieldName(),  userId);
        return null;
    }

    @RequestMapping(value="update", method=RequestMethod.POST)
    public ResponseEntity<ResponseModel> updateProfile(@RequestBody ProfileVo vo) throws KaleidoException {

        Profile profile = new Profile();

        profile.setUserId(vo.getUserId());
        profile.setUserName(vo.getUserName());
        profile.setRealName(vo.getRealName());
        profile.setPhoneNum(vo.getPhoneNum());
        profile.setGender(vo.getGender());
        profile.setBirthday(vo.getBirthday());
        profile.setCountry(vo.getCountry());
        profile.setProvince(vo.getProvince());
        profile.setCity(vo.getCity());
        profile.setAddress(vo.getAddress());
        profile.setDegree(vo.getDegree());
        profile.setOccupation(vo.getOccupation());

        profileService.updateProfile(profile);

        return new ResponseEntity<ResponseModel>(new ResponseModel<String>("success"), HttpStatus.OK);
    }

    @RequestMapping(value="/get", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> getUserInfo(@RequestParam("userId") String userId) throws KaleidoException {

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
        vo.setDegree(profile.getDegree());
        vo.setOccupation(profile.getOccupation());

        return new ResponseEntity<ResponseModel>(new ResponseModel<ProfileVo>(vo), HttpStatus.OK);
    }
}
