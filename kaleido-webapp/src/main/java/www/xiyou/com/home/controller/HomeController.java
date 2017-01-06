package www.xiyou.com.home.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import www.xiyou.com.home.model.Person;
import www.xiyou.com.user.service.UserService;

/**
 * Created by chad.ding on 2017/1/6.
 */

@Controller(value="/home")
public class HomeController {

    @Autowired
    private UserService userService;

    @RequestMapping(value="get", method = RequestMethod.POST)
    public ResponseEntity<Person> getUserInfo(){

        Person person = new Person();
        userService.getUserInfo(1);
        return new ResponseEntity<Person>(person, HttpStatus.OK);
    }
}
