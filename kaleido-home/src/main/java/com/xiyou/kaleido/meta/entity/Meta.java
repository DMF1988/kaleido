package com.xiyou.kaleido.meta.entity;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

/**
 * Created by DMF on 2017/1/15.
 */

@Setter
@Getter
public class Meta {
    private long id;
    private String parent;
    private String value;
    private String text;
    private String description;
    private Date createTime;
    private Date lastUpdateTime;
    private int deleted;
}
