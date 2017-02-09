package com.xiyou.kaleido;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.regex.Pattern;

/**
 * Created by chad.ding on 2017/1/11.
 */
public class CommonTest {
    public static void main(String[] args){

        try{
            Calendar calendar = Calendar.getInstance();
            SimpleDateFormat format = new SimpleDateFormat("yyyy/MM/dd HH:mm");
            format.setLenient(false);
            Date time = format.parse("2017/12/09 12:12");
            calendar.setTime(time);
            System.out.println(time.getTime());
        }catch(Exception e){
            System.out.println(e.getMessage());
        }


    }
}
