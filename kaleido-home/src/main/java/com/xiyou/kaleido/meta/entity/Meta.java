package com.xiyou.kaleido.meta.entity;

import lombok.Data;
import java.util.Date;

/**
 * Created by DMF on 2017/1/15.
 */

@Data
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
