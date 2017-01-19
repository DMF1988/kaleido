package com.xiyou.kaleido.common;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

/**
 * Created by chad.ding on 2017/1/19.
 */

@Component("configuration")
@Setter
@Getter
public class Configuration {

    @Value("${profile.portraitDir}")
    public String portraitDir;

}
