package com.xiyou.kaleido;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Created by chad.ding on 2017/1/11.
 */
public class CommonTest {
    public static void main(String[] args){
        Date today = new Date();
        SimpleDateFormat formater = new SimpleDateFormat("yyyyMMdd");

        String result = formater.format(today);
        System.out.println(result);
    }
}
