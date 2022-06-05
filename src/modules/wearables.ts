import * as ui from '@dcl/ui-scene-utils'
import { triggerEmote, PredefinedEmote } from "@decentraland/RestrictedActions"

var transparentMaterial = new Material()
transparentMaterial.albedoColor = new Color4(0, 0, 0, 0)

export class Wearable {

    key: string
    description: string

    constructor(key: string, description: string = null) {
        this.key = key
        this.description = description
    }
}

export class WearableSet {

    isMale = true
    isFacingVisitor = false
    rotationOffset = 0

    position: Vector3
    wearables: Wearable[]
    hairColor: Color4

    constructor(position: Vector3 = null, wearables: Wearable[] = null) {
        this.position = position
        this.wearables = wearables
    }

    getDclAvatarEntity(): Entity {

        var defaultBaseModel = "urn:decentraland:off-chain:base-avatars:Base" + (this.isMale ? "Male" : "Female")
        var defaultSkinColor = new Color4(0.94921875, 0.76171875, 0.6484375, 1)
        var defaultEyeColor = new Color4(0.23046875, 0.625, 0.3125, 1)
        var defaultHairColor = new Color4(0.234375, 0.12890625, 0.04296875, 1)

        var avatar = new Entity();
        var avatarShape = new AvatarShape();

        avatarShape.bodyShape = defaultBaseModel
        avatarShape.skinColor = defaultSkinColor
        avatarShape.eyeColor = defaultEyeColor
        avatarShape.hairColor = this.hairColor ?? defaultHairColor

        avatarShape.wearables = this.wearables.map(w => w.key)
        avatarShape.name = ""
        avatarShape.useDummyModel = true

        avatar.addComponent(avatarShape);
        avatar.addComponent(new Transform({
            position: this.position,
            rotation: Quaternion.Euler(0, 180 + this.rotationOffset, 0)
        }));

        if (this.isFacingVisitor) {
            avatar.addComponent(new Billboard(false, true, false))
        }

        return avatar
    }

    getDclClickableEntity(): Entity {

        var entity = new Entity()
        var plane = new PlaneShape()
        entity.addComponent(plane)
        entity.addComponent(new Transform({
            position: this.position,
            rotation: Quaternion.Euler(0, 180 + this.rotationOffset, 0),
            scale: new Vector3(0.5, 4, 1)
        }));

        entity.addComponent(transparentMaterial)

        var description = this.wearables.reduce((x, y) => x + "\n" + y.description, 'Wearables:\n')
        entity.addComponent(new OnPointerDown(e => {

            let prompt = new ui.CustomPrompt(ui.PromptStyles.DARK)
            let myText = prompt.addText(description, 0, 30)
            let myButton = prompt.addButton(
                'Nice!',
                0,
                -100,
                () => {
                    prompt.hide()
                    triggerEmote({ predefined: PredefinedEmote.CLAP })
                },
                ui.ButtonStyles.E
            )
        }))

        return entity
    }
}

export function addWearables() {

    var displayPositions = {
        "antelope": new Vector3(14, 0.1, 14),
        "ground": {
            "back": {
                "right1": new Vector3(12, 0.1, 14),
                "right2": new Vector3(11, 0.1, 14),
                "right3": new Vector3(10, 0.1, 14),
                "right4": new Vector3(9, 0.1, 14),
                "right5": new Vector3(8, 0.1, 14),
                "right6": new Vector3(7, 0.1, 14),
                "right7": new Vector3(6, 0.1, 14),
                "right8": new Vector3(5, 0.1, 14),
                "right9": new Vector3(4, 0.1, 14),
                "right10": new Vector3(3, 0.1, 14),
                "right11": new Vector3(1.5, 0.1, 13.5),
            },
            "side": {
                "back1": new Vector3(1, 0.1, 12),
                "back2": new Vector3(1, 0.1, 11),
            }
        }
    }

    var displayWearableSets = [
        new WearableSet(displayPositions.antelope, [
            new Wearable("urn:decentraland:matic:collections-v2:0x29470eea1ec37f25669879d0aaf9bebcaf0f92c1:0", "Monster Hall Winged Antelope Cavalier"),
        ]),
        new WearableSet(displayPositions.ground.back.right1, [
            new Wearable("urn:decentraland:matic:collections-v2:0xfcf2ea9c8be672e3a22979dc1f2e9b8ac295babf:1", "ManaWitch 80s Workout"),
            new Wearable("urn:decentraland:matic:collections-v2:0xf3cae1159280462fbd556d6133977d91f18c5529:0", "Genesis SushiSwap Sneakers"),
            new Wearable("urn:decentraland:matic:collections-v2:0x1e9d72c887f1b49a87007cb2dd1fd77b64cf111c:0", "Dragon City Unicorn Hood"),
            new Wearable("urn:decentraland:matic:collections-v2:0xe3ea740d786c2eb785ea9fb5a089e3924342a4eb:0", "Sugar Club Donut set"),
        ]),
        new WearableSet(displayPositions.ground.back.right2, [
            new Wearable("urn:decentraland:ethereum:collections-v1:pm_outtathisworld:pm_col1_panda_helmet", "Polygonal Mind Panda Helmet"),
            new Wearable("urn:decentraland:ethereum:collections-v1:china_flying:china_flying_pants", "China Flying Boy Pants"),
            new Wearable("urn:decentraland:ethereum:collections-v1:china_flying:china_flying_clothes_male", "China Flying Boy Clothes"),
        ]),
        new WearableSet(displayPositions.ground.back.right3, [
            new Wearable("urn:decentraland:ethereum:collections-v1:ml_liondance:lion_dance_feet", "Dragon City Lion Dance Shoes"),
            new Wearable("urn:decentraland:ethereum:collections-v1:ml_liondance:lion_dance_hat", "Dragon City Lion Dance Hat"),
            new Wearable("urn:decentraland:ethereum:collections-v1:ml_liondance:lion_dance_lower_body", "Dragon City Lion Dance Pants"),
            new Wearable("urn:decentraland:ethereum:collections-v1:ml_liondance:lion_dance_upper_body", "Dragon City Lion Dance Coat"),
        ]),
        new WearableSet(displayPositions.ground.back.right4, [
            new Wearable("urn:decentraland:matic:collections-v2:0x07899fe3c061a4485d11d8d81bcb9f98bbb13d68:0", "Malloy Rainbowsaurus-Rex Pyjama Suit"),
            new Wearable("urn:decentraland:matic:collections-v2:0x07899fe3c061a4485d11d8d81bcb9f98bbb13d68:1", "Malloy Rainbowsaurus-Rex Hood"),
            new Wearable("urn:decentraland:matic:collections-v2:0x07899fe3c061a4485d11d8d81bcb9f98bbb13d68:2", "Malloy Rainbowsaurus-Rex Slippers"),
        ]),
        new WearableSet(displayPositions.ground.back.right5, [
            new Wearable("urn:decentraland:matic:collections-v2:0x127f8dc3d7dd91c66dc96958df1f0edb14511f84:0", "Malloy Flamingo Party Outfit"),
            new Wearable("urn:decentraland:matic:collections-v2:0xf4957ada7f03cefd69c249371a0687654f756451:0", "DappCraft Militia General"),
        ]),
        new WearableSet(displayPositions.ground.back.right6, [
            new Wearable("urn:decentraland:ethereum:collections-v1:dc_niftyblocksmith:blocksmith_upper_body", "DappCraft DC Nifty Blocksmith Jacket"),
            new Wearable("urn:decentraland:ethereum:collections-v1:dc_niftyblocksmith:blocksmith_lower_body", "DappCraft DC Nifty Blocksmith Trousers"),
            new Wearable("urn:decentraland:ethereum:collections-v1:dc_niftyblocksmith:blocksmith_feet", "DappCraft DC Nifty Blocksmith Boots"),
            new Wearable("urn:decentraland:ethereum:collections-v1:dc_niftyblocksmith:blocksmith_helmet", "DappCraft DC Nifty Blocksmith Helmet"),
            new Wearable("urn:decentraland:ethereum:collections-v1:dc_niftyblocksmith:blocksmith_top_head", "DappCraft DC Nifty Blocksmith Drone"),
            new Wearable("urn:decentraland:ethereum:collections-v1:dc_niftyblocksmith:blocksmith_eyewear", "DappCraft DC Nifty Blocksmith Diamantex"),
        ]),
        new WearableSet(displayPositions.ground.back.right7, [
            new Wearable("urn:decentraland:ethereum:collections-v1:dappcraft_moonminer:moonminer_neurahairs_hair", "DappCraft Moon Miner Neurahairs"),
            new Wearable("urn:decentraland:matic:collections-v2:0x2cdada9435c976c5e2d13b0b48a90b4086f32580:3", "Xenia Joost x XR Couture Rufflanza"),
            new Wearable("urn:decentraland:matic:collections-v2:0xf73841bd6ee00efd3036a54bffc5f914ea1ef469:2", "Michi Todd White Rabbit Mask"),
            new Wearable("urn:decentraland:matic:collections-v2:0xd2bd1cadfe12ee9d37ff95912af7f8a97ae71ba0:0", "Fabeeo Breen White Slides FBRN"),
        ]),
        new WearableSet(displayPositions.ground.back.right8, [
            new Wearable("urn:decentraland:matic:collections-v2:0x493711707a4a396c4f58ec446348452f845bfe96:0", "Vogu Patrician TARS Head"),
            new Wearable("urn:decentraland:matic:collections-v2:0xf3eb38b1649bdccc8761f3a0526b3173597a0363:2", "Low Poly Models x Son of Adam Dissident High Tops"),
            new Wearable("urn:decentraland:matic:collections-v2:0xe66970fac32ffc972d2b6ef089d136441bc12b78:0", "Fabeeo Breen x XR Couture Comic Boom"),
            new Wearable("urn:decentraland:matic:collections-v2:0x705652b66a12dcf782b0b3d5673fbf0c1797eba2:10", "Vogu x Just Hype Thermal Shorts"),
        ]),
        new WearableSet(displayPositions.ground.back.right9, [
            new Wearable("urn:decentraland:matic:collections-v2:0x4088262efc19b54529a00b96efec9de8f60febf0:0", "DuckiezKing Matsu Mecha ZG 10-1 AP Full Body"),
            new Wearable("urn:decentraland:matic:collections-v2:0x493711707a4a396c4f58ec446348452f845bfe96:1", "Vogu Ongo TARS Head"),
        ]),
        new WearableSet(displayPositions.ground.back.right10, [
            new Wearable("urn:decentraland:matic:collections-v2:0x493711707a4a396c4f58ec446348452f845bfe96:3", "Vogu Core TARS Head"),
            new Wearable("urn:decentraland:ethereum:collections-v1:dcl_launch:launch_tshirt_upper_body", "Decentraland Launch T-Shirt"),
            new Wearable("urn:decentraland:matic:collections-v2:0x7993a8af29c930bd472a1a37b3af2d7855a441ee:2", "Subnation Alpha Pants"),
            new Wearable("urn:decentraland:matic:collections-v2:0x588dab7702ae280e7c8967de8999eb635e4b5c2e:3", "Atari Hotels Gravity Shoes"),
        ]),
        new WearableSet(displayPositions.ground.back.right11, [
            new Wearable("urn:decentraland:matic:collections-v2:0xc308ba35130258b7255455f2225262656ceb0302:0", "DuckiezKing Fallen Angel Body"),
            new Wearable("urn:decentraland:matic:collections-v2:0xc308ba35130258b7255455f2225262656ceb0302:1", "DuckiezKing Fallen Angel Helmet"),
            new Wearable("urn:decentraland:matic:collections-v2:0xc308ba35130258b7255455f2225262656ceb0302:2", "DuckiezKing Fallen Angel Wings"),
        ]),
        new WearableSet(displayPositions.ground.side.back1, [
            new Wearable("urn:decentraland:matic:collections-v2:0xe7cdc8ba8f437954a60bacaccefc0766a5e27af9:0", "Last Slice Yasuke Kusazuri"),
            new Wearable("urn:decentraland:matic:collections-v2:0xe7cdc8ba8f437954a60bacaccefc0766a5e27af9:1", "Last Slice Yasuke Kabuto"),
            new Wearable("urn:decentraland:matic:collections-v2:0xe7cdc8ba8f437954a60bacaccefc0766a5e27af9:2", "Last Slice Yasuke Do"),
        ]),
        new WearableSet(displayPositions.ground.side.back2, [
            new Wearable("urn:decentraland:matic:collections-v2:0xebdb892022673a7e6bc636d6b83a721993fa6c9b:1", "Polygonal Mind x MC2 - Suit"),
            new Wearable("urn:decentraland:matic:collections-v2:0xebdb892022673a7e6bc636d6b83a721993fa6c9b:3", "CryptoAvatars x MC2 - Shoes"),
            new Wearable("urn:decentraland:matic:collections-v2:0x4f206200e9170db9ed6cc97617ff4f6f2e4ce532:1", "Metabrands x MC2 - Magic Hat"),
        ]),
    ]

    // rotate according to position
    for (var wearableSet of displayWearableSets) {
        for (var sidePosition in displayPositions.ground.side) {        
            if (wearableSet.position === displayPositions.ground.side[sidePosition]) {
                wearableSet.rotationOffset = -90
            }
        }

        if (wearableSet.position === displayPositions.ground.back.right11) {
            wearableSet.rotationOffset = -45
        }
    }

    // special - white neural hair to match with rabbit mask
    displayWearableSets[7].hairColor = new Color4(1, 1, 1)

    // render
    displayWearableSets.forEach(s => {
        var eachAvatarEntity = s.getDclAvatarEntity()
        engine.addEntity(eachAvatarEntity)

        var eachClickableEntity = s.getDclClickableEntity()
        engine.addEntity(eachClickableEntity)
    })
}