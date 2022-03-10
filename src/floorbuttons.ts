import { floorController } from "./floorcontroller"

export class FloorButtons extends Entity {
    public upButton: Entity = new Entity()
    public downButton: Entity = new Entity()

    constructor(
        position: Vector3
    ) {
        super()

        this.addComponent(new Transform({
            position,
            scale: new Vector3(1,2,1)
        }))
        this.addComponent(new BoxShape())

        const size = .2





        const upButtonMaterial: Material = new Material()
        upButtonMaterial.albedoColor = Color3.Magenta()
        this.upButton.addComponent(new BoxShape())
        this.upButton.addComponent(new Transform({
            position: new Vector3(-.5, .2, 0),
            scale: new Vector3().setAll(size)
        }))
        this.upButton.addComponent(upButtonMaterial)
        this.upButton.addComponent(new OnPointerDown(() => {
            floorController.goUp()
        }))
        this.upButton.setParent(this)







        const downButtonMaterial: Material = new Material()
        downButtonMaterial.albedoColor = Color3.Teal()
        this.downButton.addComponent(new BoxShape())
        this.downButton.addComponent(new Transform({
            position: new Vector3(-.5, 0, 0),
            scale: new Vector3().setAll(size)
        }))
        this.downButton.addComponent(downButtonMaterial)
        this.downButton.addComponent(new OnPointerDown(() => {
            floorController.goDown()
        }))
        this.downButton.setParent(this)






        engine.addEntity(this)
    }
}