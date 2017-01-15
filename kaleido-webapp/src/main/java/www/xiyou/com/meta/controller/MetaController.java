package www.xiyou.com.meta.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import www.xiyou.com.common.ResponseModel;
import www.xiyou.com.common.annotation.KaleidoController;
import www.xiyou.com.common.util.KaleidoException;
import www.xiyou.com.meta.entity.Meta;
import www.xiyou.com.meta.mode.MetaVo;
import www.xiyou.com.meta.service.MetaService;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by DMF on 2017/1/15.
 */

@Controller
@KaleidoController
@RequestMapping(value = "/meta")
public class MetaController {

    @Autowired
    private MetaService metaService;

    @RequestMapping(value = "/getByParent", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> getMetaByParent(@RequestParam(required = true) String parent) throws KaleidoException {

        List<Meta> list = metaService.getByParent(parent);

        List<MetaVo> result = new ArrayList<MetaVo>();

        for(Meta meta : list){
            MetaVo vo = new MetaVo();

            vo.setParent(meta.getParent());
            vo.setValue(meta.getValue());
            vo.setText(meta.getText());
            vo.setDesc(meta.getDescription());

            result.add(vo);
        }

        return new ResponseEntity<ResponseModel>(new ResponseModel(result), HttpStatus.OK);
    }

    @RequestMapping(value = "/getMetaDetail", method = RequestMethod.GET)
    public ResponseEntity<ResponseModel> getMetaDetail(@RequestParam(required = true) String parent, @RequestParam(required = true) String value) throws KaleidoException {

        Meta meta = metaService.getMetaDetail(parent, value);

        MetaVo vo = new MetaVo();

        vo.setParent(meta.getParent());
        vo.setValue(meta.getValue());
        vo.setText(meta.getText());
        vo.setDesc(meta.getDescription());

        return new ResponseEntity<ResponseModel>(new ResponseModel(vo), HttpStatus.OK);
    }
}
