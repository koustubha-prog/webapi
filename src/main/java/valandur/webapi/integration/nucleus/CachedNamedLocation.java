package valandur.webapi.integration.nucleus;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.github.nucleuspowered.nucleus.api.nucleusdata.NamedLocation;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import valandur.webapi.cache.CachedObject;
import valandur.webapi.cache.misc.CachedVector3d;
import valandur.webapi.cache.world.CachedLocation;
import valandur.webapi.util.Constants;

@ApiModel("NucleusNamedLocation")
public class CachedNamedLocation extends CachedObject<NamedLocation> {

    private String name;
    @ApiModelProperty(value = "The unique name of this jail", required = true)
    public String getName() {
        return name;
    }

    private CachedLocation location;
    @ApiModelProperty(value = "The location of the jail", required = true)
    public CachedLocation getLocation() {
        return location;
    }

    private CachedVector3d rotation;
    @ApiModelProperty(value = "The rotation of players within the jail", required = true)
    public CachedVector3d getRotation() {
        return rotation;
    }


    public CachedNamedLocation() {
        super(null);
    }
    public CachedNamedLocation(NamedLocation value) {
        super(value);

        this.name = value.getName();
        this.location = value.getLocation().map(CachedLocation::new).orElse(null);
        this.rotation = new CachedVector3d(value.getRotation());
    }

    @Override
    @JsonIgnore(false)
    public String getLink() {
        return Constants.BASE_PATH + "/nucleus/jail/" + name;
    }
}
