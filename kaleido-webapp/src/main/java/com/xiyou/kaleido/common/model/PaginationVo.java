package com.xiyou.kaleido.common.model;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

/**
 * Created by chad.ding on 2017/2/9.
 */

@Setter
@Getter
public class PaginationVo<T> {
    private int total;
    private List<T> data;
}
