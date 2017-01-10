package www.xiyou.com.account.model;

import com.sun.istack.internal.NotNull;
import lombok.Getter;
import lombok.Setter;

/**
 * Created by chad.ding on 2017/1/10.
 */

@Setter
@Getter
public class Account {

    @NotNull
    private String loginName;
    @NotNull
    private String loginPassword;
    private String userName;
}
