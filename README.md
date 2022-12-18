# space-war

This is an experiment to see what gets in the way when I attempt to write a version Space War to run in the browser in 25 minutes over and over again. specification.yaml is the one carry-over from one attempt to the next. Changing "technologies" is encouraged.

### Earthlog 2022-12-17 12:30 UTC
#### Technologies
One file 'raw' JavaScript, HTML, and CSS.

### Earthlog 2022-12-17 13:58 UTC
#### What Worked
Because of the specification, there was no hesitancy about what needed to get done when it came to the input actions. Wrote most of the keyboard handler.
#### What Got in the Way
Writing html page from scratch, not deeply knowing how to do a switch statement, guessing at the thrust and rotation parameters, and copying and reformating data (key bindings) that were in the specification.
#### Proposed Tooling
Generate initial html page with key bindings.
#### Technologies
YAML parameters to generate initial code.
One file 'raw' JavaScript, HTML, and CSS

### Earthlog 2022-12-17 20:09 UTC
#### What Worked
Fleshing out the specification to frame the problem better. Generating the input handler from the yaml file. Rewriting the thrust function from scratch and remembering to apply direction information. 
#### What Got in the Way
Worrying that I was cheating because there is code in the yaml file. Named commands in the yaml file needed to be retyped. Constant data, that could be part of the specification, considered and typed. Not having a 2D world model specified. Not having a gravity model specified. Not having ship and sun locations specified. Not having a time (tick) model. Not having a speed model.
#### Proposed Tooling
Generate empty functions from known commands. Specify inital location of sun, ship1, and ship2. Specify initial velocity of ship1 and ship2. Specify tick speed. Generate tick model setup.
#### Technologies
YAML parameters generate inital code.
One file 'raw' JavaScript, HTML, and CSS

### Earthlog 2022-12-18 03:09 UTC
#### What Worked
Generating a template to work from. Identifying more major components and encoding some of them in the specification. The specification is rich enough that there was plenty of known work to be done. Using characters as a first aproximation of graphics: "V", "I", "o", and "." Fixing the previous "cheating". Generating code from constant data.
#### What Got in the Way
Working on the generation tools beyond the deadline because didn't punt on failing to get multiline data in YAML to work as a subfield. Having to build a tick/update/render (event/model/render) structure manually. No object/entity generalization.
#### Proposed Tooling
Add tick, update, and render templates. Entity: id, name, subsystem structure to YAML and generated code.