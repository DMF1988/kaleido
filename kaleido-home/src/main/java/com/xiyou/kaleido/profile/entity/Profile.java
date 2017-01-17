package com.xiyou.kaleido.profile.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Created by DMF on 2017/1/13.
 */

@Setter
@Getter
public class Profile {
    private long id;
    private String userId;
    private String userName;
    private String realName;
    private String phoneNum;
    private String country;
    private String province;
    private String city;
    private String address;
    private Date birthday;
    private String portrait;
    private char gender;
    private String degree;
    private String occupation;
    private Date createTime;
    private Date lastUpdateTime;
    private int deleted;
}
