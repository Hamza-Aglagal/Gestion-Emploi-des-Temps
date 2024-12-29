<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Salle extends Model
{
    use HasFactory;

    protected $fillable = ['nom', 'adresse'];

    public function seances()
    {
        return $this->hasMany(Seance::class);
    }

    public function filliere()
    {
        return $this->belongsTo(Filliere::class);
    }

    public function niveau()
    {
        return $this->belongsTo(Niveau::class, 'Niveau_id');
    }

}
