package com.xiyou.kaleido.common.model;

import lombok.Data;
import java.util.List;

/**
 * Created by chad.ding on 2017/2/9.
 */

@Data
public class PaginationVo<T> {
    private int total;
    private List<T> data;
}
