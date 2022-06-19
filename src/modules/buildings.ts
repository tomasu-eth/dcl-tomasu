export function addTomasuSign() {

    var sign = new Entity()
    sign.addComponent(new GLTFShape('models/tomasu_barrier/tomasu_barrier.glb'))
    const signTransform = new Transform({
        position: new Vector3(2, 0.5, 1),
        rotation: new Quaternion(0, 180, 0, 1),
        scale: new Vector3(0.5, 0.5, 0.5)
    })

    sign.addComponent(signTransform)
    engine.addEntity(sign)
}

export function addTwitterLink() {

    const twitterLink = new Entity()
    twitterLink.addComponent(new GLTFShape('models/social_media_twitter/twitter.glb'))

    const twitterLinkTransform = new Transform({
        position: new Vector3(4.2, 0, 1),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(0.7, 0.7, 0.7)
    })

    twitterLink.addComponent(twitterLinkTransform)
    twitterLink.addComponent(new OnPointerDown(e => {
        openExternalURL("https://twitter.com/tomasu_eth")
    }, {
        button: ActionButton.PRIMARY,
        showFeedback: true,
        hoverText: "Tomasu Twitter",
    }))

    engine.addEntity(twitterLink)
}

export function addBuilding() {

    var building = new Entity()
    building.addComponent(new GLTFShape('models/damage_building/metallic.glb'))
    const buildingTransform = new Transform({
        position: new Vector3(1.5, 2.8, 14.3),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1.3, 1.3, 1.3)
    })

    building.addComponent(buildingTransform)
    engine.addEntity(building)

    var buildingSide_1 = new Entity()
    const gltfShapeBuildingSide_1 = new GLTFShape('models/damage_building/metallic_side.glb')
    buildingSide_1.addComponent(gltfShapeBuildingSide_1)
    const buildingSideTransform_1 = new Transform({
        position: new Vector3(10, 2.8, 15.7),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1.3, 1.3, 1.3)
    })

    buildingSide_1.addComponent(buildingSideTransform_1)
    engine.addEntity(buildingSide_1)

    var buildingSide_2 = new Entity()
    buildingSide_2.addComponent(gltfShapeBuildingSide_1)
    const buildingSideTransform_2 = new Transform({
        position: new Vector3(0.3, 2.8, 6),
        rotation: new Quaternion(0, -1, 0, 1),
        scale: new Vector3(-1.3, 1.3, 1.3)
    })

    buildingSide_2.addComponent(buildingSideTransform_2)
    engine.addEntity(buildingSide_2)
}