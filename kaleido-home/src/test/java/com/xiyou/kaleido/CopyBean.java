package com.xiyou.kaleido;

import com.fasterxml.jackson.databind.util.BeanUtil;
import com.xiyou.kaleido.entity.Man;
import com.xiyou.kaleido.entity.Person;
import org.apache.commons.beanutils.BeanUtils;

import java.lang.reflect.InvocationTargetException;

/**
 * Created by chad.ding on 2017/2/14.
 */
public class CopyBean {
    public static void main(String[] args){
        Person person = new Person();
        person.setName("abc");
        person.setAge(20);

        Man man = new Man();
        try {
            BeanUtils.copyProperties(man, person);
            System.out.println(man.getName());
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }

    }
}
