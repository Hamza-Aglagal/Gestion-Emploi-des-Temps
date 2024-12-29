<?php

namespace App\Http\Controllers;

use App\Models\Seance;
use App\Models\Salle;
use Illuminate\Http\Request;
use Carbon\Carbon;



class SalleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $salles = Salle::all();
        return $salles ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'adresse' => 'required',
        ]);


         // verifier si la salle est déja existe
         $existingSalle = Salle::where('nom', $request->nom)
         ->where('adresse', $request->adresse)
         ->first();
         
         if ($existingSalle) {
         return "Salle existe déja !";
         }
    
        Salle::create($request->all());
        return "'created successfully.." ;
    }


      /**
     * Display the specified resource.
     *
     * @param  \App\Models\Salle  $salle
     * @return \Illuminate\Http\Response
     */

     public function AllSalleActive()
     {
         $desiredTimeZone = 'Africa/Casablanca';
         config(['app.timezone' => $desiredTimeZone]);
     
         $currentDay = Carbon::now()->setTimezone($desiredTimeZone)->locale('fr');
         $dayName = $currentDay->translatedFormat('l');
     
         $currentTime = $currentDay->format('H:i:s');
 
        //  $currentTime = '14:33:09' ;
 
     
         $seancesEnligne = Seance::whereHas('dateHeurs', function ($query) use ($currentTime) {
             $query->where('heur_debut', '<=', $currentTime)
                   ->where('heur_fin', '>=', $currentTime);
         })->where('jour', $dayName)
           ->with(['groupes', 'salle', 'dateHeurs', 'groupes.filliere', 'groupes.niveau'])
           ->get();
     
         $SalleEnligne = $seancesEnligne->pluck('salle')->filter();
    
         $allSalles = Salle::get();        
 
         $SalleNonEnLigne = $allSalles->diff($SalleEnligne);
     
 
         
         return [
             'Salle_en_ligne' => $SalleEnligne,
             'Salle_non_en_ligne' => $SalleNonEnLigne,
         ];
     }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Salle  $salle
     * @return \Illuminate\Http\Response
     */
    public function show(Salle $salle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Salle  $salle
     * @return \Illuminate\Http\Response
     */
    public function edit(Salle $salle)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Salle  $salle
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Salle $salle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Salle  $salle
     * @return \Illuminate\Http\Response
     */
    public function destroy(Salle $salle)
    {
        //
    }
}
