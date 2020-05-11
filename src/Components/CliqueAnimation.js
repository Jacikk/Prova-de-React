import React, { Component } from 'react'

var toggle = false;

//não usei o toggle da maneira mais elegante pois teria que fazer varias alterações não necessarias no momentos

export default function CliqueAnimation() {
    
    if(toggle == false ){

        document.getElementById("Avatar").style.animation= 'avatarImageMovement 1500ms';
        document.getElementById("Avatar").addEventListener("animationend", function () {
            document.getElementById("Avatar").style.transform = 'translateX(-250%)';
            }
        )
        
        
        document.getElementById("description").style.animation= 'descriptionIn 1000ms ease-out';
        document.getElementById("description").style.animationDelay= '550ms';
        document.getElementById("description").addEventListener(
            "animationend", function () {
                document.getElementById("description").style.zIndex= '0';
                document.getElementById("Avatar").style.transform = 'translateX(-250%)';
            }
        );
        toggle = true;

    } else {

        document.getElementById("description").style.animation= 'descriptionOut 750ms ease-out';
        document.getElementById("description").style.animationDelay= '0';
        document.getElementById("description").addEventListener(
            "animationend", function () {
                document.getElementById("description").style.zIndex= '-1'
            }
        );
        document.getElementById("Avatar").style.animation= 'avatarImageMovementOut 1s';
        document.getElementById("Avatar").style.animationDelay= '300ms';
        document.getElementById("Avatar").addEventListener(
            "animationend", function () {
                document.getElementById("Avatar").style.transform = 'translateX(0%)';
            }
        );
        toggle = false;
    }
}