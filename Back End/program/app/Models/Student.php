<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;


class Student extends Authenticatable implements JWTSubject
{
    use HasFactory;

    protected $fillable = ['nom', 'prenom', 'email', 'numero','password','groupe_id'];


    
    public function getJWTIdentifier()
    {
        return $this->getKey(); 
    }

    public function getJWTCustomClaims()
    {
        return [];
    }
    
}
