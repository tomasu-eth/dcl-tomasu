import { WearableSet, Wearable } from "./wearables"

var camera = Camera.instance
var tigerStartingPosition = new Vector3(6, 0.1, 7)
var tigerTargetPosition = new Vector3(6, 0.1, 7)

@Component('lerpData')
class TigerLerpData {
    origin: Vector3 = tigerStartingPosition
    target: Vector3 = tigerTargetPosition
    fraction: number = 0
}

class TigerWalk {

    tigerEntity: Entity
    tigerClickableEntity

    constructor(tigerEntity: Entity, tigerClickableEntity: Entity) {
        this.tigerEntity = tigerEntity
        this.tigerClickableEntity = tigerClickableEntity
    }

    update(dt: number) {
        let tigerClickableTransform = this.tigerClickableEntity.getComponent(Transform)
        let tigerTransform = this.tigerEntity.getComponent(Transform)
        let lerp = this.tigerEntity.getComponent(TigerLerpData)

        lerp.target.x = (tigerTransform.position.x > camera.position.x) ? camera.position.x + 1 : camera.position.x - 1;
        lerp.target.y = 0.1
        lerp.target.z = (tigerTransform.position.z > camera.position.z) ? camera.position.z + 1 : camera.position.z - 1;

        if (lerp.target.x > 1 && lerp.target.x < 14 &&
            lerp.target.z > 1 && lerp.target.z < 14) {

            lerp.fraction += dt / 600
            var lerpVector = Vector3.Lerp(tigerTransform.position, lerp.target, lerp.fraction)
            tigerTransform.position = lerpVector
            tigerClickableTransform.position = lerpVector
        } else {
            lerp.fraction = 0
        }
    }
}

export function addTiger() {

    var tiger = new WearableSet()
    tiger.isFacingVisitor = true
    tiger.position = tigerStartingPosition
    tiger.wearables = [
        new Wearable("urn:decentraland:matic:collections-v2:0xe62f62cc7137a5a47457275473bbb6bc24e609da:3", "Polygonal Mind Water Tiger Mount"),
        new Wearable("urn:decentraland:ethereum:collections-v1:community_contest:cw_native_american_tiara", "Native American Hat"),
    ]

    var tigerLerpData = new TigerLerpData()

    var tigerEntity = tiger.getDclAvatarEntity()
    tigerEntity.addComponent(tigerLerpData)
    engine.addEntity(tigerEntity)

    var tigerClickableEntity = tiger.getDclClickableEntity()
    engine.addEntity(tigerClickableEntity)

    engine.addSystem(new TigerWalk(tigerEntity, tigerClickableEntity))
}
