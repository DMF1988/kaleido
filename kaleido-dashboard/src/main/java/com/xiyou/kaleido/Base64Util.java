package com.xiyou.kaleido;

import sun.misc.BASE64Encoder;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;


public class Base64Util {

    public static void main(String[] args){
        String base64 = getImageStr("/Users/DMF/GitHub/note/images/hexagon.png");
        System.out.println(base64.replaceAll("\n", ""));
    }

    public static String getImageStr(String imgFile) {
        InputStream inputStream = null;
        byte[] data = null;
        try {
            inputStream = new FileInputStream(imgFile);
            data = new byte[inputStream.available()];
            inputStream.read(data);
            inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        // 加密
        BASE64Encoder encoder = new BASE64Encoder();
        return encoder.encode(data);
    }
}
