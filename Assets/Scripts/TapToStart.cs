using UnityEngine;
using System.Collections;

public class TapToStart : MonoBehaviour 
{
    void OnMouseDown()
    {
        Application.LoadLevel("Scene");
    }
}
