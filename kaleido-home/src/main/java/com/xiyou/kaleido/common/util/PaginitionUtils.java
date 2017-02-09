package com.xiyou.kaleido.common.util;

public class PaginitionUtils {

    public static int getTotalPage(int pageLimit, int totalCount){
        return (totalCount+pageLimit-1)/pageLimit;
    }
}
