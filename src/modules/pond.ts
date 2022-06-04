export function addPond() {

    const scene = new Entity()
    const transform = new Transform({
        position: new Vector3(0, 0, 0),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    scene.addComponentOrReplace(transform)
    engine.addEntity(scene)

    const floorBaseGrass_02 = new Entity()
    floorBaseGrass_02.setParent(scene)
    const gltfShape = new GLTFShape('models/FloorBaseGrass_02/FloorBaseGrass_02.glb')
    floorBaseGrass_02.addComponentOrReplace(gltfShape)
    const transform_2 = new Transform({
        position: new Vector3(8, 0, 8),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    floorBaseGrass_02.addComponentOrReplace(transform_2)
    engine.addEntity(floorBaseGrass_02)

    const treeSycamore_03 = new Entity()
    treeSycamore_03.setParent(scene)
    const gltfShape_6 = new GLTFShape('models/TreeSycamore_03/TreeSycamore_03.glb')
    treeSycamore_03.addComponentOrReplace(gltfShape_6)
    const transform_18 = new Transform({
        position: new Vector3(2.600529983526542, 0, 2.609682346643229),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    treeSycamore_03.addComponentOrReplace(transform_18)
    engine.addEntity(treeSycamore_03)

    const flower_02 = new Entity()
    flower_02.setParent(scene)
    const gltfShape_7 = new GLTFShape('models/Flower_02/Flower_02.glb')
    flower_02.addComponentOrReplace(gltfShape_7)
    const transform_19 = new Transform({
        position: new Vector3(4.9780206378006495, 0, 3.5),
        rotation: new Quaternion(0, 0.19509032201612825, 0, 0.9807852804032304),
        scale: new Vector3(1, 1, 1)
    })
    flower_02.addComponentOrReplace(transform_19)
    engine.addEntity(flower_02)

    const flower_02_2 = new Entity()
    flower_02_2.setParent(scene)
    flower_02_2.addComponentOrReplace(gltfShape_7)
    const transform_20 = new Transform({
        position: new Vector3(13.040716245334519, 0, 4),
        rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
        scale: new Vector3(1, 1, 1)
    })
    flower_02_2.addComponentOrReplace(transform_20)
    engine.addEntity(flower_02_2)

    const plant_07 = new Entity()
    plant_07.setParent(scene)
    const gltfShape_8 = new GLTFShape('models/Plant_07/Plant_07.glb')
    plant_07.addComponentOrReplace(gltfShape_8)
    const transform_22 = new Transform({
        position: new Vector3(14.232798126893892, 0, 5.5),
        rotation: new Quaternion(0, 0.8819212643483549, 0, 0.4713967368259977),
        scale: new Vector3(1, 1, 1)
    })
    plant_07.addComponentOrReplace(transform_22)
    engine.addEntity(plant_07)

    const chineseFountain_01 = new Entity()
    chineseFountain_01.setParent(scene)
    const gltfShape_10 = new GLTFShape('models/ChineseFountain_01/ChineseFountain_01.glb')
    chineseFountain_01.addComponentOrReplace(gltfShape_10)
    const transform_24 = new Transform({
        position: new Vector3(12.706812008711836, 0, 6.937021247760857),
        rotation: new Quaternion(0, -0.38268343236508984, 0, 0.9238795325112868),
        scale: new Vector3(1, 1, 1)
    })
    chineseFountain_01.addComponentOrReplace(transform_24)
    engine.addEntity(chineseFountain_01)

    const pond_01 = new Entity()
    pond_01.setParent(scene)
    const gltfShape_11 = new GLTFShape('models/Pond_01/Pond_01.glb')
    pond_01.addComponentOrReplace(gltfShape_11)
    const transform_25 = new Transform({
        position: new Vector3(8.464244386806834, 0, 5.5),
        rotation: new Quaternion(0, -0.49870371999541796, 0, 0.8667725189821909),
        scale: new Vector3(1, 1, 1)
    })
    pond_01.addComponentOrReplace(transform_25)
    engine.addEntity(pond_01)

    const bush_01 = new Entity()
    bush_01.setParent(scene)
    const gltfShape_13 = new GLTFShape('models/Bush_01/Bush_01.glb')
    bush_01.addComponentOrReplace(gltfShape_13)
    const transform_27 = new Transform({
        position: new Vector3(2.5, 0, 2.961450831904415),
        rotation: new Quaternion(0, 0.9569403357322088, 0, 0.2902846772544626),
        scale: new Vector3(1, 1, 1)
    })
    bush_01.addComponentOrReplace(transform_27)
    engine.addEntity(bush_01)

    const plant_03 = new Entity()
    plant_03.setParent(scene)
    const gltfShape_14 = new GLTFShape('models/Plant_03/Plant_03.glb')
    plant_03.addComponentOrReplace(gltfShape_14)
    const transform_28 = new Transform({
        position: new Vector3(9.192418188446288, 0, 4.950499164790128),
        rotation: new Quaternion(0, 0.19509032201612814, 0, 0.9807852804032308),
        scale: new Vector3(1, 1, 1)
    })
    plant_03.addComponentOrReplace(transform_28)
    engine.addEntity(plant_03)

    const plant_03_2 = new Entity()
    plant_03_2.setParent(scene)
    plant_03_2.addComponentOrReplace(gltfShape_14)
    const transform_29 = new Transform({
        position: new Vector3(7.990338528764321, 0, 5.811398855986454),
        rotation: new Quaternion(0, 0.5555702330196022, 0, -0.8314696123025449),
        scale: new Vector3(1, 1, 1)
    })
    plant_03_2.addComponentOrReplace(transform_29)
    engine.addEntity(plant_03_2)

    const log_03 = new Entity()
    log_03.setParent(scene)
    const gltfShape_15 = new GLTFShape('models/Log_03/Log_03.glb')
    log_03.addComponentOrReplace(gltfShape_15)
    const transform_30 = new Transform({
        position: new Vector3(4.4259015955857315, 0, 9.036561740102172),
        rotation: new Quaternion(0, 0.9269651787908869, 0, -0.3751473807841107),
        scale: new Vector3(1, 1, 1)
    })
    log_03.addComponentOrReplace(transform_30)
    engine.addEntity(log_03)

    const rockMedium_01 = new Entity()
    rockMedium_01.setParent(scene)
    const gltfShape_17 = new GLTFShape('models/RockMedium_01/RockMedium_01.glb')
    rockMedium_01.addComponentOrReplace(gltfShape_17)
    const transform_32 = new Transform({
        position: new Vector3(2.5, 0, 6),
        rotation: new Quaternion(0, 0, 0, 1),
        scale: new Vector3(1, 1, 1)
    })
    rockMedium_01.addComponentOrReplace(transform_32)
    engine.addEntity(rockMedium_01)

    const rockSmall_01 = new Entity()
    rockSmall_01.setParent(scene)
    const gltfShape_18 = new GLTFShape('models/RockSmall_01/RockSmall_01.glb')
    rockSmall_01.addComponentOrReplace(gltfShape_18)
    const transform_33 = new Transform({
        position: new Vector3(3.5, 0, 6.341934256067859),
        rotation: new Quaternion(0, -0.6427891289997293, 0, 0.7660431682612738),
        scale: new Vector3(1, 1, 1)
    })
    rockSmall_01.addComponentOrReplace(transform_33)
    engine.addEntity(rockSmall_01)

    const rockSmall_02 = new Entity()
    rockSmall_02.setParent(scene)
    const gltfShape_19 = new GLTFShape('models/RockSmall_02/RockSmall_02.glb')
    rockSmall_02.addComponentOrReplace(gltfShape_19)
    const transform_34 = new Transform({
        position: new Vector3(3.736234367797749, 0, 4.536425172834994),
        rotation: new Quaternion(0, 0.2782707811971341, 0, 0.960502666488717),
        scale: new Vector3(1, 1, 1)
    })
    rockSmall_02.addComponentOrReplace(transform_34)
    engine.addEntity(rockSmall_02)
}