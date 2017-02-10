package com.xiyou.kaleido.profile.model;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

/**
 * Created by chad.ding on 2017/2/9.
 */

@Setter
@Getter
public class UserQueryVo {
    private String keyword;

    @Min(1)
    @Max(1000)
    private int pageSize;

    @Min(0)
    private int pageNum;
}
