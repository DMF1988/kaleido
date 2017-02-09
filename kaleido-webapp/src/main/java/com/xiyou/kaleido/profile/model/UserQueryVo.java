package com.xiyou.kaleido.profile.model;

import lombok.Getter;
import lombok.Setter;

/**
 * Created by chad.ding on 2017/2/9.
 */

@Setter
@Getter
public class UserQueryVo {
    private String keyword;
    private int pageSize;
    private int pageNum;
}
