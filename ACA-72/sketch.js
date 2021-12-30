const Engine = Matter.Engine;
const Composite= Matter.Composite;
const Bodies = Matter.Bodies;

var engine, world;
var b1, b2,b3, g1, ball1, ball2;

function setup(){
    canvas = createCanvas(1536,790);
    engine = Engine.create();
    world = engine.world;

    var b1_options={     //properties for b1
        restitution: 0
    }
    var b2_options={     //properties for b2
        restitution: 0
    }
    var b3_options={     //properties for b2
        restitution: 0
    }
    var g1_options={    //properties for g1
        isStatic: true
    }
    var ball1_options={        //properties for basketball
        restitution: 0.1
    }
    var ball2_options={        //properrties for crazy ball
        restitution: 0.1
    }
    
    b1 = Bodies.rectangle(700,300,120,30, b1_options);
    b2 = Bodies.rectangle(700,300,120,30, b2_options);
    b3 = Bodies.rectangle(700,300,120,30, b3_options);
    g1 = Bodies.rectangle(768,780,1540, 20, g1_options);

    ball1 = Bodies.circle(400, 300, 30, ball2_options);
    ball2 = Bodies.circle(500, 300, 35, ball1_options);
    Composite.add(world, [b1, b2, b3, g1, ball1, ball2]);
}

function draw(){
    background(0);
    Engine.update(engine);

    rectMode(CENTER);
    fill("brown");
    rect(b1.position.x, b1.position.y, 120, 30);
    fill("yellow");
    rect(b2.position.x, b2.position.y, 120, 30);
    fill("red");
    rect(b3.position.x, b3.position.y, 120, 30);
    fill("green");
    rect(g1.position.x, g1.position.y, 1540, 20);
    
    ellipseMode(RADIUS);
    fill("red");
    ellipse(ball1.position.x, ball1.position.y, 30);
    fill("red");
    ellipse(ball2.position.x, ball2.position.y, 30);
}