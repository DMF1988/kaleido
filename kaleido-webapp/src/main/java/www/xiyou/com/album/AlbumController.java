package www.xiyou.com.album;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import www.xiyou.com.common.ResponseModel;
import www.xiyou.com.common.annotation.KaleidoController;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Created by chad.ding on 2017/1/10.
 */

@Controller
@KaleidoController
@RequestMapping(value="/album")
public class AlbumController {

    @RequestMapping(value="/update")
    public ResponseEntity<ResponseModel> uploadImage(@RequestParam MultipartFile[] images, HttpServletRequest request, HttpServletResponse response){

        return new ResponseEntity<ResponseModel>(new ResponseModel("success"), HttpStatus.OK);
    }
}